/* 
홍길동이라는 사람은 구체적인 정보가 있고 이러한 구체적인 정보를 가진것은 객체가될 수 있다.
반면 사람이란 단어의 의미는 연령, 성별, 인종 등 정보가 구체적이지 않다. 이러한 것들이 추상클래스가 되고,
구체적인 정보들을 가지는 객체들의 공통ㅋㅋㅋㅋㅁ적인 정보를 추상클래스에서 갖는다.
*/
public class Abstract {

}

abstract class Keyboard {
    private String keyTypeLanguage;
    private int keyTypeNo;
    private boolean hasLight;
    private void useLight(boolean hasLight) {
        if(hasLight) {
            System.out.println("light");
        } else {
            System.out.println("not support light");
        }
    }
}