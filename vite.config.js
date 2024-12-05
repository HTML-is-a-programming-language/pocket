export default {
    server: {
      open: true, // 브라우저 자동 열기
      port: 3000, // 개발 서버 포트
      hmr: true, // HMR 활성화
      watch: {
        usePolling: true,
      },
    },
    build: {
      outDir: "dist", // 빌드 결과물 경로
    },
  };