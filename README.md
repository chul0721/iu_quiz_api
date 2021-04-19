# Introduction

아이유 퀴즈 API는 전세계의 유애나 개발자들을 위해 아이유 퀴즈를 다양한 곳에서 활용할 수 있도록 하기 위해 만든 API입니다. <br />
IU Quiz API is made for developers whom needs quiz for IU while hosting a service.

이 README에서는 IU QUIZ API의 사용법에 대한 [문서](#Docs)가 작성 되어 있습니다. 오타, 혹은 잘못된 정보나 오역, 기재되지 않은 정보들 등이 있다면 PR을 생성하여 주시면 검토 후 승인하도록 하겠습니다. <br />
This README.md will explain how to use the IU Quiz api. If you find out any mistranslation or misspellings, please create PRs and I will thankfully approve it after reviewing.

또한, 아이유 퀴즈인 만큼, 다른 사람들의 의견을 통해 퀴즈를 추가하려고 합니다. 이슈를 생성할 때 퀴즈 추가 태그를 붙여서 아래 형식에 맞게 작성해주시면 감사하겠습니다. <br />
Also, as this quiz is IU quiz, I will approve other people's idea. Please open an issue fitting the following format :
```
난이도/Difficulty : 상/중/하 (High/Middle/Low)
문제/Quiz : (문제) / (Quiz)
정답/Answer : (답) / (Answer)
```

# Docs

목차 Contents
* [1. Hello World](#Hello-World)
    - [1-1. Base URL](#BaseURL)
    - [1-2. Status Codes](#Status-Codes)
* [2. Request](#Request)
* [3. Response](#Response)


## Hello World

API가 작동하는지의 여부를 확인하기 위한 테스트 과정입니다. 해당 API는 별도의 키값을 통한 인증 과정이 없기 때문에 이 과정은 건너 뛰어도 무방합니다. <br />
This is a test process to find out if API is working well. It is fine to skip this process.

ex)
```http
GET /api/hello?name=int
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` | **Not Required**. Your name |

### BaseURL

```http
baseURL : http://chul0721.iptime.org:1993/api/
```
현재 베타 버전이므로 위 주소는 테스트입니다. 완성 후 정상 작동하는 URL로 바뀔 예정입니다.
This is the Beta version. When the API is completed, it will be changed to normal URL.

### Status Codes

API의 상태에 따라 아래 HTTP 상태 코드를 반환합니다.
The API will return the following status codes:

| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 400 | `BAD REQUEST` |
| 404 | `NOT FOUND` |
| 500 | `INTERNAL SERVER ERROR` |


## Request

요청을 보낼 때 값을 JSON의 형태로 보내야 합니다. 또한 난이도에 따라 다양한 
ex)
```json
{
    "difficulty": "middle"
}
```


## Response