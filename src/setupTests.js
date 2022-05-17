// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// msw 서버 가져오기
import { server } from './mocks/server.js';
// 모든 테스트 시작전에 서버를 리슨 한다.
beforeAll(()=> server.listen());
// 테스트중에 추가한 핸들러들을 리셋하여 다른 테스트에 영향이 가지 않게 한다.
afterEach(()=> server.resetHandlers());
// 서버를 클린업
afterAll(()=> server.close())
