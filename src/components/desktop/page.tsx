
export default function DesktopApp({title, content}: {title: string, content:string}) {
    return(
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}