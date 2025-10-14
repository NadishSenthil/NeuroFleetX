package JavaExcercises;

public class JavaConditions2 {
    public static void main(String[] args) {

        int arr[] = {90,80,70,60,40};

        for (int i = 0; i < arr.length; i++) {
            int marks = arr[i];

            switch (marks / 10) {  // divide by 10 to group ranges (90-100 → 9 or 10)
                case 10:
                    System.out.println(marks+" -O");
                    break;
                case 9:
                    System.out.println(marks+" -A");
                    break;
                case 8:
                    System.out.println(marks+" -B");
                    break;
                case 7:
                    System.out.println(marks+" -C");
                    break;
                case 6:
                    System.out.println(marks+" -D");
                    break;
                case 5:
                    System.out.println(marks+" -E");
                    break;
                default:
                    System.out.println(marks+" -F");
                    break;
            }
        }


    }

}
