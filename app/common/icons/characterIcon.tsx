import Image from 'next/image'

function CharacterIcon(
    props: Readonly<{
        src: string;
        alt: string;
    }>
) {
    const prefix = process.env.NODE_ENV === 'production' ? '/genshin-char-grouping-tool' : ''

    return <div className="w-full h-full block relative overflow-hidden rounded-tr-2xl">
        <Image src={prefix + props.src} alt={props.alt}
               className="w-full h-full object-cover" sizes='100vw' fill
               draggable={false}/>
    </div>
}

export default CharacterIcon