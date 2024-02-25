import { useState, useEffect, ReactNode } from 'react'
import { Octokit } from "@octokit/rest";

const octokit = new Octokit();
export default function useGitHub(repository: string) {

    const [readMe, setReadme] = useState<string|ReactNode>('');
    const owner = 'JosephSchec';
    const repo = repository


    useEffect(() =>{ (async () => {
        if (repo !== 'private') {
            const myReadMes = atob(await (await octokit.rest.repos.getReadme({ owner, repo })).data.content)
            const readMeArr = myReadMes.split('####');
            let paragraphView = ''
            for (let i = 1; i < readMeArr.length; i++) {
                paragraphView += readMeArr[i] + '\n'
            }

            const points = paragraphView.split('*').map((bullet, i) => {
                if (bullet.includes(':') || bullet.includes('?')) {
                    if (bullet.includes('T')) {
                        return <li key={i} className='underline font-bold text-lg'>T{bullet.split('T')[1]}</li>
                    }
                    if (bullet.includes('W')) {
                        return <li key={i} className='underline font-bold text-lg' >W{bullet.split('W')[1]}</li>
                    }
                }
                return <li key={i} className='text-left list-disc list-inside'>{bullet}</li>
            });
            setReadme(points)
        } else {
            setReadme(<li >Sorry this repo is private, feel free to view the site and ask me any questions</li>)
        }
    })()}, [repo])

    return <ul >{readMe}</ul>
}