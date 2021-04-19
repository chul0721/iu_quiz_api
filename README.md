# 소개 (Ko)

아이유 퀴즈 API는 전세계의 유애나 개발자들을 위해 아이유 퀴즈를 다양한 곳에서 활용할 수 있도록 하기 위해 만든 API입니다.

이 README에서는 IU QUIZ API의 사용법에 대한 [문서](#Docs)가 작성 되어 있습니다. 오타, 혹은 잘못된 정보나 문제 오류, 기재되지 않은 정보들 등이 있다면 PR을 생성하여 주시면 검토 후 승인하도록 하겠습니다.

또한, 아이유 퀴즈인 만큼, 다른 사람들의 의견을 통해 퀴즈를 추가하려고 합니다. 이슈를 생성할 때 퀴즈 추가 태그를 붙여서 아래 형식에 맞게 작성해주시면 감사하겠습니다.
```
난이도 : High/Middle/Low
문제 : (문제)
정답 : (답)
높임 : High/Middle/Low
```

공식 서포트 디스코드 : https://discord.gg/nKaM6RrN92
<br />
![Discord Banner](https://discordapp.com/api/guilds/750705387124031510/widget.png?style=banner2)

# API 문서

목차
* [1. Hello World(Ko)](#Hello-World(Ko))
    - [1-1. Base URL](#BaseURL)
    - [1-2. Status Codes](#Status-Codes)
* [2. Request](#Request)
* [3. Response](#Response)


## Hello World(Ko)

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
    "answer" : "930516",
    "difficulty" : "low",
    "honorifics" : "low"
}
```


# Introduction (En)

The IU Quiz API is an API designed to help UAE developers around the world use IU Quiz in various places.

In this README, [Documents](#Docs) are created for how to use the IU QUIZ API. If there are typos, or incorrect information, problem errors, or unwritten information, please create a PR and we will review and approve it.

Also, since it is an IU quiz, I am going to add quizzes through other people's opinions. When creating an issue, I would appreciate it if you add additional quiz tags and write them according to the format below.
```
Difficulty: High/Middle/Low
Problem: (Problem)
Answer: (Answer)
높임 : High/Middle/Low
```

Official Support Discord: https://discord.gg/nKaM6RrN92
<br />
![Discord Banner](https://discordapp.com/api/guilds/750705387124031510/widget.png?style=banner2)

# Docs

Table of Contents
* [1. Hello World](#Hello-World)
    - [1-1. Base URL](#BaseURL)
    - [1-2. Status Codes](#Status-Codes)
* [2. Request](#Request)
* [3. Response](#Response)


## Hello World

A test process to determine whether the API is working. The API does not have a separate authentication process with key values, so you can skip this process.

ex)
```http
GET /api/hello?name=int
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| 'name' | 'string' | **Not required**. Name |

If the parameter does not specify a value for name, "✅" is returned if api is operating normally, if the parameter is named "✅ | Verified, (name)!" is returned.

### Base URL

```http
http://chul0721.iptime.org:1993
```
The address above is a test because it is currently a beta version. It will be changed to a working URL after completion.

### Status Codes

Returns the HTTP status code below, depending on the status of the API.

| Status Code | Description |
| --- | --- |
| 200 | `OK` |
| 400 | `BAD REQUEST` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |


## Request

All requests sent to API are unified to GET. <br />
When you send a request, you can customize the return value through parameters. You can send the appropriate values according to the table below. You cannot receive a value unless you request a value that says "Required". If marked as "Not Required", this means that you do not need to request it. If you request a value that is different from the one described in the table below, you will not receive the value.

| Parameter | Type | Description | Value | Required |
| ---      | --- | ---        | ---  | ---     |
| Honorifics | 'string' | You can raise or lower the listener by increasing or lowering the tone of the question according to relative honorifics. | Select one of the high/middle/low values | **Required** |
| 'difficulty' | 'string' | You can receive values by classifying the difficulty level into three categories: upper, middle, and lower. | Select one of the high/middle/low values | **Not Required |
| 'hint' | 'string' | You can optionally receive a hint of the problem. | Select one of the values of yes/no | **Not required** |

ex)
```http
GET /api/quiz?honorifics=high?difficulty=middle?hint=yes
```

## Response

The API returns values as shown below. You can customize the received value by [Set parameter] (#Request). The ID is the value you specify to identify quizzes internally, and when you create an issue, you can process it faster if you tell us which problem is bugged with the id of the problem.

ex)
```json
{
    "id" : "1",
    "quiz": "Is IU's birthday?"
    "hint" : "YYMMDD",
    "answer" : "930516",
    "difficulty" : "low",
    "honorifics" : "low"
}
```
