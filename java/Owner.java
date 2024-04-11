
public class Owner {
  public static void main(String[] args) {

    Archer a1 = new Archer(); // Archer 클래스 타입
    a1.name = "궁수1";
    a1.speak();
    a1.attack();

    Attackable a2 = new Archer(); // Attackable 인터페이스 타입
    // a2.name = "궁수2"; // 사용불가
    // a2.speak(); // 사용불가
    a2.attack();
  }
}