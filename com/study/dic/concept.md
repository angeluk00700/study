# 개념정리

## <span style="color:#2D3748; background-color:#fff5b1;">ElementHandle</span>

[TAG] Playwright, DOM

ElementHandle은 Playwright에서 <span style='color:black; background-color: #ABC5A8'>DOM 요소를 나타내는 객체</span>입니다. 이 객체는 선택하거나 생성한 DOM 요소와 상호작용하며 조작하는 데 사용됩니다. ElementHandle`객체는 DOM 요소에 대한 다양한 작업을 수행하는 데 사용되는 여러 메서드를 제공합니다.

ElementHandle을 사용하여 다음과 같은 작업을 수행할 수 있습니다:

- DOM 요소의 속성, 텍스트, 값 등을 가져오거나 설정할 수 있습니다.
- DOM 요소를 클릭하거나 특정 동작을 수행할 수 있습니다.
- DOM 요소의 CSS 속성을 가져오거나 변경할 수 있습니다.
- DOM 요소의 위치와 크기 정보를 얻을 수 있습니다.
- DOM 요소에 대한 하위 요소를 검색하고 조작할 수 있습니다.

ElementHandle은 Playwright에서 웹 페이지와 상호작용하고 웹 요소를 조작하는 데 사용되는 중요한 개념입니다.

## <span style="color:#2D3748; background-color:#fff5b1;">Playwright의 Locator와 query_select의 차이</span>

[TAG] Playwright, Locator, query_select

Locator와 query_select는 Playwright에서 요소(element)를 찾는 데 사용되는 두 가지 다른 개념입니다.

**Locator**:

- Locator는 Playwright의 검색 기능 중 하나로, 요소를 식별하는 데 사용되는 객체입니다.
- Locator는 다양한 속성을 기반으로 요소를 찾을 수 있습니다. 예를 들어, CSS 선택자, XPath 등을 사용하여 요소를 찾을 수 있습니다.
- Locator는 page.locator()` 메서드를 사용하여 생성됩니다.
- Locator는 비동기적으로 요소를 검색하고, 검색 결과로 ElementHandle 객체를 반환합니다.
- ElementHandle 객체는 검색된 요소에 대한 조작 및 상호작용을 수행하는 데 사용됩니다.

**query_select**:

- query_select는 Playwright의 ElementHandle 객체의 메서드입니다.
- query_select 메서드는 ElementHandle 객체 내에서 요소를 검색하는 데 사용됩니다.
- query_select는 CSS 선택자를 인수로 사용하여 요소를 찾습니다.
- query_select는 비동기적으로 요소를 검색하고, 검색 결과로 다시 ElementHandle 객체를 반환합니다.
- query_select 메서드를 반복적으로 호출하여 중첩된 요소를 검색하고 조작할 수 있습니다.

따라서, <span style='color:black; background-color: #ABC5A8'>Locator는 페이지 수준에서 요소를 검색하는 데 사용되는 객체이며, query_select은 ElementHandle 객체 수준에서 요소를 검색</span>하는 메서드입니다. Locator를 사용하여 요소를 검색한 후에는 해당 요소에 대해 query_select 메서드를 사용하여 내부 요소를 검색하고 조작할 수 있습니다.