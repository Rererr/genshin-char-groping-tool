import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                'rarity-5': 'linear-gradient(180deg, #a35d55, #d0aa6e)',
                'rarity-4': 'linear-gradient(180deg, #3f4064, #9c65d7)',
            },
            width: {
                '22': '5.5rem',
                'character-pool': '550px', // キャラクタープールの幅
                'char-icon-lg': '100px', // 大きい画像の幅
                'char-icon-sm': '85px'  // 小さい画像の幅 (15%小さい)
            },
            height: {
                '26': '6.5rem',
                '34': '8.5rem',
                'character-pool': '390px', // キャラクタープールの高さ
                'char-icon-lg': '148px', // 大きい画像の高さ
                'char-icon-sm': '126px'  // 小さい画像の高さ (15%小さい)
            },
            maxHeight: {
                'rank-result': '600px', // ランク結果の高さ
                'rank-result-pc': '1200px', // ランク結果の高さ(pc)
            },
            gridTemplateColumns: {
                '15': 'repeat(15, minmax(0, 1fr))',
                '17': 'repeat(17, minmax(0, 1fr))',
            },
        },
        screens: {
            spl: '499px',// sp-landscape
            tb: '1010px',// tablet
            pc: '1450px',// pc
        },
    },
    plugins: [],
};
export default config;
