export async function load_content(path: string): Promise<string> {
    let response = await fetch(path);
    let rawText = "";

    if (!response.ok) {
        rawText = `# Diagnostic : Fichier introuvable\n\nLe système n'a pas pu localiser \`${path}\`.\n\n`;
    } else {
        rawText = await response.text();
    }

    return rawText;
}


export async function share_link({title, desc}: {title: string, desc: string}){
        await navigator.share({
            title: title,
            text: desc,
            url: window.location.href
        });
}