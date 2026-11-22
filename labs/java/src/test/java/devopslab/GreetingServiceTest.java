package devopslab;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class GreetingServiceTest {
    @Test
    void greetsTrimmedName() {
        assertEquals("Hello, Andriy!", GreetingService.greet("  Andriy  "));
    }

    @Test
    void usesDefaultName() {
        assertEquals("Hello, world!", GreetingService.greet(null));
    }
}
