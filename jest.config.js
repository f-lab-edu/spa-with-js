module.exports = {
  testEnvironment: 'jsdom', // 테스트 환경으로 jsdom을 사용
  transform: {
    '^.+\\.js$': 'babel-jest', // .js 파일에 대해 babel-jest를 사용하여 변환
  },
};
