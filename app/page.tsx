import Link from 'next/link'

const STRIPE_URL = 'https://buy.stripe.com/3cI7sK4ckexygQk5ON08g0j'
const LINE_URL = 'https://lin.ee/qvChhK3'

export default function Page() {
  return (
    <main>
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center font-black text-white text-lg">T</div>
            <div className="leading-tight">
              <div className="font-black text-base sm:text-lg text-gray-900">トレーニングクリニック</div>
              <div className="text-[10px] sm:text-xs text-gray-500 tracking-wider">TREKURI</div>
            </div>
          </div>
          <a href={STRIPE_URL} className="hidden sm:inline-flex bg-blue-600 text-white font-bold text-sm px-4 py-2 rounded-lg hover:bg-blue-500">申し込む</a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="max-w-5xl mx-auto px-5 pt-16 sm:pt-24 pb-20 sm:pb-28 text-center">
          <div className="inline-block text-xs sm:text-sm font-bold text-blue-700 bg-blue-100 px-3 py-1.5 rounded-full mb-6">治療院向け ファンクショナルトレーニング処方AI</div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight">
            「痛み」を取ったその先の、<br className="hidden sm:block" />
            <span className="text-blue-600">機能向上</span>を、AIで処方する。
          </h1>
          <p className="mt-6 sm:mt-8 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            写真と体力テストから、患者一人ひとりに最適なファンクショナルトレーニングを自動で処方。
            A4表裏の印刷レポートで、その日から指導が始められます。
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a href={STRIPE_URL} className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-black px-8 py-4 rounded-2xl text-lg shadow-lg shadow-blue-600/20 transition-all">月額5,500円で申し込む</a>
            <a href="#features" className="w-full sm:w-auto text-gray-700 font-semibold px-8 py-4 hover:text-blue-600">特徴をみる →</a>
          </div>
          <p className="mt-5 text-xs text-gray-500">決済完了後、1営業日以内にログイン情報をお届けします</p>
        </div>
      </section>

      {/* 課題提示 */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-5">
          <h2 className="text-2xl sm:text-3xl font-black text-center text-gray-900">痛みは取れた。<br className="sm:hidden" />でも「その先」を出せずにいませんか？</h2>
          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            {[
              '徒手で良くなった後、何をすれば再発しないか伝えきれていない',
              '運動処方はしたいが、1人ずつ個別に組むのは時間がない',
              'リハサク・姿勢カルテ系は「治療」寄りで、機能向上の型がない',
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6 text-gray-700 leading-relaxed text-sm sm:text-base">
                <div className="text-blue-600 font-black mb-2">0{i + 1}</div>
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-14">
            <div className="text-sm font-bold text-blue-600 mb-2">FEATURES</div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900">ファンクショナルに特化した、3つの設計</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              num="01"
              title="写真×AI 姿勢分析"
              body="正面・側面の写真1枚ずつで、MediaPipeが自動でランドマーク検出。頭部前方変位・肩の高さ・骨盤傾斜・膝アライメントを数値化し、AIが伸びしろポイントを抽出します。"
            />
            <FeatureCard
              num="02"
              title="ファンクショナル自動処方"
              body="ゴブレットスクワット・ブルガリアン・ダンベルRDLなどのBig3を軸に、片脚系・運搬系・体幹系から4種目を個別処方。セット数・回数まで自動で決定します。"
            />
            <FeatureCard
              num="03"
              title="A4表裏 印刷レポート"
              body="1枚目「からだ診断」、2枚目「今日からやるトレーニング」。各種目にQRコードを付け、患者さんがスマホで動画を見ながら自宅でも取り組めます。"
            />
          </div>
        </div>
      </section>

      {/* FLOW */}
      <section className="bg-blue-600 text-white py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-14">
            <div className="text-sm font-bold text-blue-200 mb-2">HOW IT WORKS</div>
            <h2 className="text-3xl sm:text-4xl font-black">施術の流れに溶け込む、4ステップ</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { n: '1', t: '写真撮影', d: '正面・側面を各1枚。スマホからそのままアップロード。' },
              { n: '2', t: '体力テスト', d: '片足立ち・スクワット・前屈など7項目をタップで入力。' },
              { n: '3', t: 'AI処方', d: 'Claudeが姿勢と体力から4種目のトレーニングを自動選定。' },
              { n: '4', t: '印刷・手渡し', d: 'A4表裏を印刷して患者さんへ。QRで動画確認もOK。' },
            ].map(s => (
              <div key={s.n} className="bg-blue-500/30 backdrop-blur rounded-2xl p-6 border border-blue-400/30">
                <div className="w-10 h-10 bg-white text-blue-600 rounded-full flex items-center justify-center font-black text-lg mb-4">{s.n}</div>
                <div className="font-black text-xl mb-2">{s.t}</div>
                <p className="text-sm text-blue-50 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TARGET */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-5">
          <div className="text-center mb-12">
            <div className="text-sm font-bold text-blue-600 mb-2">FOR</div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900">こんな治療院におすすめです</h2>
          </div>
          <ul className="grid sm:grid-cols-2 gap-4">
            {[
              '施術後のセルフケア・運動指導をもう一段引き上げたい',
              'リハサク・姿勢カルテから乗り換え・併用を検討している',
              'パーソナルやジム併設を考えている治療院',
              'リピート・紹介を増やす「差別化商材」がほしい',
              '自費メニューに運動処方を組み込みたい',
              '訪問鍼灸・機能訓練型デイサービスでも使いたい',
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-200">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-black mt-0.5">✓</span>
                <span className="text-gray-800 leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PRICE */}
      <section id="price" className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-5">
          <div className="text-center mb-10">
            <div className="text-sm font-bold text-blue-600 mb-2">PRICING</div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900">シンプルな、1プランのみ</h2>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-3xl p-8 sm:p-12 shadow-xl">
            <div className="text-center">
              <div className="inline-block text-xs font-bold bg-white/20 px-3 py-1 rounded-full mb-4">STANDARD</div>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl sm:text-6xl font-black">5,500</span>
                <span className="text-xl font-bold">円 / 月</span>
              </div>
              <p className="text-sm text-blue-100 mt-2">（税込）初期費用・契約期間の縛りなし</p>
            </div>
            <ul className="mt-8 space-y-3">
              {[
                '患者登録・診断履歴 無制限',
                'AI処方（Claude搭載） 回数無制限',
                'A4表裏 印刷レポート',
                '10種目のファンクショナルトレーニングマスタ',
                '動画URL登録＆QRコード自動発行',
                'セキュリティ・個人情報保護 完全対応',
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-xs font-black mt-0.5">✓</span>
                  <span className="text-blue-50">{t}</span>
                </li>
              ))}
            </ul>
            <a href={STRIPE_URL} className="mt-10 block w-full text-center bg-white text-blue-600 font-black px-8 py-4 rounded-2xl text-lg hover:bg-blue-50 transition-all shadow-lg">いますぐ申し込む</a>
            <p className="text-center text-xs text-blue-100 mt-4">決済はStripeの暗号化環境で処理されます</p>
          </div>
        </div>
      </section>

      {/* ONBOARDING */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto px-5">
          <div className="text-center mb-10">
            <div className="text-sm font-bold text-blue-600 mb-2">ONBOARDING</div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900">申し込みから利用開始まで</h2>
          </div>
          <ol className="space-y-4">
            {[
              { t: 'フォームから決済', d: 'Stripeの決済ページで、クレジットカード情報を入力して申し込み。' },
              { t: '運営からログイン情報が届く', d: '1営業日以内に、院名付きのログイン情報（メール＆パスワード）をお送りします。' },
              { t: '院の設定・患者登録', d: 'ログイン後、院情報・スタッフ名・使用するエクササイズを設定。患者登録もすぐに始められます。' },
              { t: '実際の施術で使用開始', d: '初回の診断・処方・印刷までは10分以内。患者さんの「次の一手」をその場で提示できます。' },
            ].map((s, i) => (
              <li key={i} className="flex gap-4 bg-white rounded-2xl p-6 border border-gray-200">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-black">{i + 1}</div>
                <div>
                  <div className="font-black text-lg text-gray-900 mb-1">{s.t}</div>
                  <p className="text-sm text-gray-600 leading-relaxed">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-5">
          <div className="text-center mb-10">
            <div className="text-sm font-bold text-blue-600 mb-2">FAQ</div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900">よくあるご質問</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details key={i} className="group bg-white border border-gray-200 rounded-2xl">
                <summary className="cursor-pointer list-none p-5 font-bold text-gray-900 flex items-center justify-between">
                  <span>{f.q}</span>
                  <span className="text-blue-600 group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
                </summary>
                <div className="px-5 pb-5 text-gray-700 leading-relaxed border-t border-gray-100 pt-4">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">まずは相談してみたい方へ</h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            「自院に合うか聞きたい」「デモを見てから決めたい」という方は、<br className="hidden sm:block" />
            公式LINEからお気軽にご連絡ください。開発者本人がお返事します。
          </p>
          <a href={LINE_URL} className="inline-block bg-green-500 hover:bg-green-400 text-white font-black px-10 py-4 rounded-2xl text-lg shadow-lg transition-all">公式LINEで相談する</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-10 text-center text-sm">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-black text-white">T</div>
            <div className="font-black text-white">トレーニングクリニック</div>
          </div>
          <p className="mb-1">運営: 大口アプリラボ（共同開発: 川口敦宏 / 整体院　幸）</p>
          <p className="text-xs">&copy; {new Date().getFullYear()} トレーニングクリニック All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  )
}

function FeatureCard({ num, title, body }: { num: string; title: string; body: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-7 hover:shadow-xl hover:border-blue-200 transition-all">
      <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center font-black text-lg mb-5">{num}</div>
      <h3 className="font-black text-xl text-gray-900 mb-3">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
    </div>
  )
}

const faqs = [
  {
    q: '最低契約期間はありますか？',
    a: 'ございません。月額契約で、いつでも解約いただけます。解約された月の末日まではご利用いただけます。',
  },
  {
    q: '患者データは何人まで登録できますか？',
    a: '上限はございません。診断履歴・トレーニングプランも無制限で保存できます。',
  },
  {
    q: 'スタッフは何人まで使えますか？',
    a: '院で1アカウントのご提供です。複数名のスタッフが同一アカウントで使用いただけます。',
  },
  {
    q: 'スマホ・タブレットでも使えますか？',
    a: 'はい、スマートフォン・タブレットのブラウザでご利用いただけます。印刷はPC＋プリンター接続時が推奨です。',
  },
  {
    q: '患者データのセキュリティは大丈夫ですか？',
    a: 'Supabase（米国SOC2準拠）の暗号化DBで管理し、院単位で完全に分離しています。外部に漏れることはありません。患者データはお客様ご自身でいつでも削除できます。',
  },
  {
    q: 'AI処方の内容は編集できますか？',
    a: 'はい、提案された種目の差し替え・セット数/回数の調整が可能です。セラピストコメントも自由記述で入れられます。',
  },
  {
    q: '解約後、データはどうなりますか？',
    a: '解約日の翌月末まで保管し、その後完全に削除されます。事前にダウンロードいただくことも可能です。',
  },
]
