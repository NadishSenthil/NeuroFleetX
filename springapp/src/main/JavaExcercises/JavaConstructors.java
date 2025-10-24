package JavaExcercises;

class Person {
    String name;
    Person(String name) { this.name = name; }
}

public class JavaConstructors {
    public static void main(String[] args) {
        Person p = new Person("Nadish Senthil");
        System.out.println("Name: " + p.name);
    }
}
