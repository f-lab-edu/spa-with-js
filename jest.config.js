module.exports = {
  testEnvironment: 'jsdom', // 테스트 환경으로 jsdom을 사용
  transform: {
    '^.+\\.js$': 'babel-jest', // .js 파일에 대해 babel-jest를 사용하여 변환
    '^.+\\.ts$': 'ts-jest', // TypeScript 파일을 위한 설정 추가
  },
  testPathIgnorePatterns: ['/node_modules/', '/__tests__/mocks/'], // __test__ 안에 mocks 폴더는 테스트 제외
  moduleFileExtensions: ['ts', 'js'], // 처리할 파일 확장자 목록
};
