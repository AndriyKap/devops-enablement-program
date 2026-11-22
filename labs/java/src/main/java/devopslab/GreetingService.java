package devopslab;

public final class GreetingService {
    private GreetingService() {}

    public static String greet(String name) {
        String recipient = name == null || name.isBlank() ? "world" : name.trim();
        return "Hello, " + recipient + "!";
    }
}
