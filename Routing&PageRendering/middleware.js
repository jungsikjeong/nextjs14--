import { NextResponse } from 'next/server';

export default function middleware(request) {
  console.log(request);
  return NextResponse.next();
}

export const config = {
  // matcher특정 경로에서 실행되도록 미들웨어를 필터링할 수 있음.
  matcher: '/news',
};
