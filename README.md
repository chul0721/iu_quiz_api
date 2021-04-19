# Introduction

아이유 퀴즈 API는 전세계의 유애나 개발자들을 위해 아이유 퀴즈를 다양한 곳에서 활용할 수 있도록 하기 위해 만든 API입니다.

이 README에서는 IU QUIZ API의 사용법에 대한 [문서](#Docs)가 작성 되어 있습니다. 오타, 혹은 잘못된 정보나 문제 오류, 기재되지 않은 정보들 등이 있다면 PR을 생성하여 주시면 검토 후 승인하도록 하겠습니다.

또한, 아이유 퀴즈인 만큼, 다른 사람들의 의견을 통해 퀴즈를 추가하려고 합니다. 이슈를 생성할 때 퀴즈 추가 태그를 붙여서 아래 형식에 맞게 작성해주시면 감사하겠습니다.

```
난이도 : High/Middle/Low
문제 : (문제)
정답 : (답)
```

# Docs

목차
* [1. Hello World](#Hello-World)
    - [1-1. Base URL](#BaseURL)
    - [1-2. Status Codes](#Status-Codes)
* [2. Request](#Request)
* [3. Response](#Response)


## Hello World

API가 작동하는지의 여부를 확인하기 위한 테스트 과정입니다. 해당 API는 별도의 키값을 통한 인증 과정이 없기 때문에 이 과정은 건너 뛰어도 무방합니다.

ex)
```http
GET /api/hello?name=int
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` | **필수 아님**. 이름 |

파라미터로 name의 값이 지정되지 않았을 경우 api가 정상 작동하는 경우 "✅"가 리턴되며, 만약 파라미터로 이름을 지정할 경우 "✅ | Verified, (이름)!"가 리턴됩니다.

### Base URL

```http
http://chul0721.iptime.org:1993
```
현재 베타 버전이므로 위 주소는 테스트입니다. 완성 후 정상 작동하는 URL로 바뀔 예정입니다.

### Status Codes

API의 상태에 따라 아래 HTTP 상태 코드를 반환합니다.

| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 400 | `BAD REQUEST` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |


## Request

API로 보내는 요청은 전부 GET으로 통일되어 있습니다. <br />
요청을 보낼 때 파라미터를 통해 반환 값을 사용자화 할 수 있습니다. 아래 표에 따라 알맞는 값을 보낼 수 있습니다. "필수"로 적혀 있는 값을 요청하지 않는다면 값을 받을 수 없습니다. "필수 아님"으로 표시되어 있는 경우 필수적으로 요청하지 않아도 된다는 뜻입니다. 아래 표의 설명에 적혀있는 값과 다른 값을 요청 할 경우 값을 반환받을 수 없습니다.

| Parameter | Type | Description | Value | Required |
| :---      | :--- | :---        | :---  | :---     |
| `honorifics` | `string` | 상대경어법에 따라 질문의 말투를 높이거나 낮추어 청자를 높이거나 낮출 수 있습니다. | high/middle/low 중 한 가지 값 선택 | **필수** |
| `difficulty` | `string` | 난이도를 상, 중, 하 3가지로 분류하여 값을 받을 수 있습니다. | high/middle/low 중 한 가지 값 선택 | **필수 아님** |
| `hint` | `string` | 문제의 힌트를 선택적으로 받을 수 있습니다. | yes/no 중 한 가지 값 선택 | **필수 아님** |

ex)
```http
GET /api/quiz?honorifics=high?difficulty=middle?hint=yes
```

## Response

해당 API는 아래 값과 같이 값을 반환합니다. 이 때 받는 값을 [파라미터를 설정](#Request) 하여 사용자화 할 수 있습니다. ID는 내부에서 퀴즈들을 식별하기 위해 지정해둔 값이고, issue 생성 시 문제의 id로 어떤 문제에 버그가 있는지 알려주시면 더 빠르게 처리가 가능해집니다.

ex)
```json
{
    "id" : "1",
    "quiz" : "아이유의 생일은?",
    "hint" : "YYMMDD",
    "answer" : "5월 16일",
    "difficulty" : "low",
    "honorifics" : "low"
}
```