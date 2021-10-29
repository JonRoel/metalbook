import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';


export default function Header() {
    const router = useRouter();

    return (
        <>
            <div className="shape-group-1"> 
                <Link href="/"><Button className={router.pathname == "/" ? "current" : ""} variant="secondary">All</Button></Link>
                <Link href="Angle-Equal"><Button className={router.pathname == "/Angle-Equal" ? "current" : ""} variant="secondary">Angle Equal</Button></Link>
                <Link href="/Angle-Unequal"><Button className={router.pathname == "/Angle-Unequal" ? "current" : ""} variant="secondary">Angle Unequal</Button></Link>
                <Link href="C-Channel"><Button className={router.pathname == "/C-Channel" ? "current" : ""} variant="secondary">C Channel</Button></Link>
                <Link href="Flats"><Button className={router.pathname == "/Flats" ? "current" : ""} variant="secondary">Flats</Button></Link>
                <Link href="HP-Shapes"><Button className={router.pathname == "/HP-Shapes" ? "current" : ""} variant="secondary">HP Shapes</Button></Link>
                <Link href="HSS-Round"><Button className={router.pathname == "/HSS-Round" ? "current" : ""} variant="secondary">HSS Round</Button></Link>
                <Link href="HSS-Square"><Button className={router.pathname == "/HSS-Square" ? "current" : ""} variant="secondary">HSS Square</Button></Link>
            </div>
            <div className="shape-group-2">
                <Link href="M-Shapes"><Button className={router.pathname == "/M-Shapes" ? "current" : ""} variant="secondary">M Shapes</Button></Link>
                <Link href="MC-Channel"><Button className={router.pathname == "/MC-Channel" ? "current" : ""} variant="secondary">MC Channel</Button></Link>
                <Link href="MT"><Button className={router.pathname == "/MT" ? "current" : ""} variant="secondary">MT</Button></Link>
                <Link href="Pipe-Std"><Button className={router.pathname == "/Pipe-Std" ? "current" : ""} variant="secondary">Pipe Standard</Button></Link>
                <Link href="Round-Bar"><Button className={router.pathname == "/Round-Bar" ? "current" : ""} variant="secondary">Round Bar</Button></Link>
                <Link href="Square-Bar"><Button className={router.pathname == "/Square-Bar" ? "current" : ""} variant="secondary">Square Bar</Button></Link>
                <Link href="ST-Beam"><Button className={router.pathname == "/ST-Beam" ? "current" : ""} variant="secondary">ST Beam</Button></Link>
                <Link href="W-Beams"><Button className={router.pathname == "/W-Beams" ? "current" : ""} variant="secondary">W Beam</Button></Link>
            </div>
        </>
    )
}