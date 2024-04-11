public class Human { // Human 클래스 정의
  String name;

  public void speak() {
    System.out.println(name + ": 안녕하세요");
  }
}

interface Attackable { // Attackable 인터페이스 정의
  abstract public void attack();
}

class Archer extends Human implements Attackable { // Archer 클래스정의 (Human상속, Attackable구현)
  @Override
  public void attack() {
    System.out.println(name + ": 공격합니다.");
  }
}