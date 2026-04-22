import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'

const noto = Noto_Sans_JP({ subsets: ['latin'], weight: ['400', '500', '700', '900'] })

export const metadata: Metadata = {
  title: 'トレーニングクリニック｜治療院向けファンクショナルトレーニング処方アプリ',
  description: '写真と体力テストからAIが最適なファンクショナルトレーニングを自動処方。0をプラスにする機能向上プログラムを、治療院の現場に。月額5,500円。',
  openGraph: {
    title: 'トレーニングクリニック｜治療院向けファンクショナルトレーニング処方アプリ',
    description: '写真と体力テストからAIが最適なファンクショナルトレーニングを自動処方。0をプラスにする機能向上プログラム。',
    type: 'website',
    locale: 'ja_JP',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className={`${noto.className} bg-white text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  )
}
