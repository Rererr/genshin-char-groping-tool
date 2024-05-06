import Image from 'next/image'


function RarityIcon(
    props: Readonly<{
        viewType: 'genshin' | 'hsr';
    }>) {
    const prefix = process.env.NODE_ENV === 'production' ? '/genshin-char-grouping-tool' : ''

    const src = props.viewType === 'genshin' ? '/images/genshin/utils/rarityStar.png' : '/images/hsr/utils/rarityStar.png'

    return <div className="w-4 h-4 mt-0.5" style={{
        display: 'block',
        position: 'relative',
    }}>
        <Image src={prefix + src} alt='star'
               style={{
                   width: '100%',
               }} sizes='50vw' fill/>
    </div>
}

export default RarityIcon