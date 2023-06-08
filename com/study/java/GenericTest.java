// 클래스 내부에서 사용할 데이터 타입을 나중에 인스턴스를 생성할때 확정하는 것
// 하나의 값이 여러 데이터 타입들을 가질 수 있도록 하는 방법
// 데이터 타입의 안정성을 확보

class ClassName<E> {
    private E element;

    void set(E element) {
        this.element = element;
    }

    E get() {
        return element;
    }

    <T> T genericMethod(T val) {
        return val;
    }
}

class Person<T, S> {
    public T info;
    public S id;
    Person(T info, S id) {
        this.info = info;
        this.id = id;
    }

    public <U> void printInfo(U info) {
        System.out.println(info);
        Class<?> objClass = info.getClass();
        System.out.println("U type is= " + objClass.getName());

    }
}

// 지정한 클래스와 그 하위 클래스의 타입만을 허용
// class Person<T extends InfoS> {
//     public T info;
//     Person(T info) {
//         this.info = info;
//     }
// }


class EmployeeInfo {
    public int rank;
    EmployeeInfo(int rank) {
        this.rank = rank;
    }
}
class GenericTest {
    public static void main(String[] args) {
        ClassName<String> strInst = new ClassName<String>();
        ClassName<Integer> intInst = new ClassName<Integer>();

        strInst.set("str");
        intInst.set(1);

        System.out.println(strInst.get());
        System.out.println(intInst.get());
        System.out.println(strInst.genericMethod(2).getClass().getName());

        // Integer i = new Integer(2);
        // Person<EmployeeInfo, Integer> p1 = new Person<EmployeeInfo, Integer>(new EmployeeInfo(1), Integer.valueOf(2));
        // 타입 매개변수 생략 가능. 컴파일러가 데이터 타입을 알고 있음.
        /* 컴파일시 아래와 같은 메세지가 뜸. 타입은 명시해주는 것을 추천하는 것 같다.
         * Note: GenericTest.java uses unchecked or unsafe operations.
           Note: Recompile with -Xlint:unchecked for details.

           참고: Java에서는 제네릭 타입을 사용할 때 타입 인자를 명시적으로 지정해야 합니다. 이는 Java 컴파일러가 타입 안정성을 보장하기 위한 규칙입니다.
           기본적으로 Java에서는 제네릭 타입의 인스턴스 생성 시에 타입 인자를 생략하면 "unchecked" 경고가 발생합니다. 이는 컴파일러가 해당 코드에서 제네릭 타입의 안전한 사용을 보장할 수 없음을 의미합니다.
         */
        // Person<EmployeeInfo, Integer> p1 = new Person(new EmployeeInfo(11), Integer.valueOf(22));
        Person<EmployeeInfo, Integer> p1 = new Person<EmployeeInfo, Integer>(new EmployeeInfo(11), Integer.valueOf(22));
        System.out.println(p1.info.rank);
        System.out.println(p1.id);

        p1.printInfo(p1.info);

        // TODO

        // FIXME
    }
}