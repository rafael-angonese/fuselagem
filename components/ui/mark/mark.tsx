import React, { ComponentProps, useEffect } from 'react';
import './styles.css';

export interface MarkProps extends ComponentProps<'mark'> {
    highlightColor?: string;
    hue? : number;
}

export const Mark: React.FC<MarkProps> = ({ children, hue = 45, highlightColor = 'hsl(45, 80%, 80%)', ...props }) => {
    useEffect(() => {
        if (!CSS.supports('animation-timeline: view()')) {
            const marks = document.querySelectorAll('mark');
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        entry.target.style.setProperty(
                            '--highlighted',
                            entry.isIntersecting ? 1 : 0
                        );
                    });
                },
                { threshold: 1.0 }
            );
            marks.forEach((mark) => observer.observe(mark));
        }
    }, []);

    return (
        <>
            <mark {...props}
                style={{
                    // '--highlight': highlightColor,
                    '--hue': hue.toString(),
                } as React.CSSProperties}
            >
                {children}
            </mark>
        </>
    )
}
