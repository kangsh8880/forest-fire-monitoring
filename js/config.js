/* =========================================================
 * 실시간 산불상황 모니터링 - 환경설정
 * Supabase 정보를 비워두면 "로컬 시험모드"로 동작합니다.
 * (로컬 시험모드: 같은 브라우저 안에서만 현장앱 ↔ 통제실 데이터 공유)
 * ========================================================= */
window.FFM_CONFIG = {
  // ---- Supabase 연결 (Project Settings > API Keys 에서 복사) ----
  SUPABASE_URL: 'https://ydladdffjqpcjynqpjdd.supabase.co',          // 예: 'https://abcdefgh.supabase.co'
  SUPABASE_ANON_KEY: 'sb_publishable_hqsnudfSFzN78mCy3s92Qw_ZXBMl782',     // Publishable key('sb_publishable_...') 또는 Legacy anon key('eyJ...') 둘 다 가능
                             // ※ secret key(sb_secret_...) / service_role 키는 절대 넣지 말 것
  STORAGE_BUCKET: 'ffm-media',

  // ---- 개인정보·위치정보 안내 (현장앱 동의문구 / 처리방침 화면에 표시) ----
  OPERATOR_NAME: '산불상황 모니터링 시범운영',   // 운영 주체(기관·회사명)
  OPERATOR_CONTACT: '',                         // 개인정보·위치정보 문의처(이메일 또는 전화) ※ 운영 전 반드시 입력
  PRIVACY_OFFICER: '',                          // 개인정보 보호책임자·위치정보관리책임자 (예: '홍길동 팀장') ※ 운영 전 반드시 입력
  DATA_REGION: '대한민국(서울) ap-northeast-2',     // Supabase 프로젝트 리전
  CONSENT_VERSION: '2026-10-14',                // 동의문구 버전(문구 변경 시 날짜 갱신)
  OBS_RETENTION_DAYS: 365,                      // 관측(사진·위치) 보유기간 - sql/schema.sql 의 값과 동일하게 유지
  CALLBACK_RETENTION_DAYS: 30,                  // 회신 전화번호 보유기간 - sql/schema.sql 의 값과 동일하게 유지

  // ---- 나침반 ----
  // 자편각(자북 → 진북 보정). 동편 +, 서편 -
  // 한국 약 -8.5 / 베트남 북부 약 -1.5
  MAG_DECLINATION: -8.5,
  HEADING_ERR_DEG: 5,        // 통제실 방향선 오차범위(±도) 표시값

  // ---- 통제실 지도 ----
  MAP_CENTER: [36.5, 127.8], // 초기 지도 중심 (위도, 경도)
  MAP_ZOOM: 7,
  BEARING_LINE_KM: 5,        // 방향선 길이(km)
  CROSS_WINDOW_MIN: 15,      // 교차점 계산 시 동일 시간대로 보는 촬영시각 차이(분)
  CROSS_MIN_ANGLE: 15,       // 교차각이 이보다 작으면 교차점 계산 제외(도)
  POLL_SEC: 15,              // 실시간 수신 보조 조회 주기(초)
  CB_ALERT_MIN: 5,           // 회신 요청이 이 시간(분) 넘게 미처리면 경보(깜빡임·반복 알림음)
  EVAC_RINGS_KM: [1, 3],     // 대피 반경(km) - 산불영역 둘레 기준

  // ---- 촬영 ----
  PHOTO_MAX_PX: 1600,        // 사진 긴 변 최대 픽셀 (전송량 절감)
  PHOTO_QUALITY: 0.8,
  THUMB_MAX_PX: 400,
  VIDEO_MAX_SEC: 30,         // 영상 최대 길이(초)
  VIDEO_BITRATE: 1500000     // 영상 비트레이트(bps) → 30초 약 6MB
};
