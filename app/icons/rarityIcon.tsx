import Image from 'next/image'

function RarityIcon() {
    const prefix = process.env.NODE_ENV === 'production' ? '/genshin-char-grouping-tool' : ''

    return <div className="w-4 h-4 mt-0.5" style={{
        display: 'block',
        position: 'relative',
    }}>
        <Image src={prefix + '/images/utils/rarityStar.png'} alt='star'
               style={{
                   width: '100%',
               }} sizes='50vw' fill/>
    </div>
}

export default RarityIcon