import Image from 'next/image'

function SelectItemIcon(
    props: Readonly<{
        src: string;
        alt: string;
    }>
) {
    const prefix = process.env.NODE_ENV === 'production' ? '/genshin-char-grouping-tool' : ''

    return <div className="w-full h-full object-cover block relative">
        <Image src={prefix + props.src} alt={props.alt}
               style={{
                   width: '100%',
                   borderTopRightRadius: '20px'
               }} sizes='50vw' fill/>
    </div>
}

export default SelectItemIcon