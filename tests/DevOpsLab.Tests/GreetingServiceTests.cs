using DevOpsLab.Api;
using Xunit;

namespace DevOpsLab.Tests;

public class GreetingServiceTests
{
    [Theory]
    [InlineData("Andriy", "Hello, Andriy!")]
    [InlineData("  Kate  ", "Hello, Kate!")]
    [InlineData(null, "Hello, world!")]
    [InlineData("   ", "Hello, world!")]
    public void CreateMessage_ReturnsExpectedGreeting(string? name, string expected)
    {
        var actual = GreetingService.CreateMessage(name);
        Assert.Equal(expected, actual);
    }
}
