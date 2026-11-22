using Npgsql;
using Xunit;

namespace DevOpsLab.Tests;

public sealed class PostgresIntegrationTests
{
    [Fact]
    public async Task InsertAndSelect_ReturnsSavedUser()
    {
        var connectionString = Environment.GetEnvironmentVariable("TEST_DATABASE_CONNECTION");

        Assert.False(
            string.IsNullOrWhiteSpace(connectionString),
            "TEST_DATABASE_CONNECTION must be configured for PostgreSQL integration tests.");

        await using var connection = new NpgsqlConnection(connectionString);
        await connection.OpenAsync();

        await using (var create = new NpgsqlCommand("""
            CREATE TEMP TABLE test_users (
                id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                name text NOT NULL
            )
            """, connection))
        {
            await create.ExecuteNonQueryAsync();
        }

        await using (var insert = new NpgsqlCommand(
            "INSERT INTO test_users (name) VALUES (@name)", connection))
        {
            insert.Parameters.AddWithValue("name", "Andriy");
            Assert.Equal(1, await insert.ExecuteNonQueryAsync());
        }

        await using var select = new NpgsqlCommand(
            "SELECT name FROM test_users WHERE name = @name", connection);

        select.Parameters.AddWithValue("name", "Andriy");

        var actual = await select.ExecuteScalarAsync();
        Assert.Equal("Andriy", actual as string);
    }
}
