import { Mark } from "@/components/ui/mark/mark";

const App = () => {
    return (
        <>
            <div className="max-h-[400px] overflow-y-scroll">
                <div className="px-4 md:px-8 text-base">
                    <section>
                        <h1 className="text-2xl font-semibold">Next.js on Vercel</h1>
                        <span>
                            Vercel is the native Next.js platform, designed to enhance the Next.js experience.
                        </span>
                        <p>
                            Next.js is a fullstack React framework for the web, maintained by Vercel.
                        </p>
                        <p>
                            While Next.js works when self-hosting, deploying to Vercel is zero-configuration and provides additional enhancements for{' '}
                            <Mark highlightColor="hsl(200, 70%, 50%)" hue={10}>
                                <span>scalability, availability, and performance globally.</span>
                            </Mark>
                        </p>
                    </section>
                    <section>
                        <h2 id="image-optimization">Image Optimization</h2>
                        <p>
                            Image Optimization helps you achieve faster page loads by reducing the
                            size of images and using modern image formats.
                        </p>
                        <p>
                            When deploying to Vercel,
                            <Mark hue={280}><span>images are automatically optimized on demand</span></Mark>, keeping your build times fast while improving your page load performance and Core Web Vitals.
                        </p>
                        <p>
                            When self-hosting, Image Optimization uses the default Next.js server
                            for optimization. This server manages the rendering of pages and
                            serving of static files.
                        </p>
                        <p>
                            To use Image Optimization with Next.js on Vercel,
                            <Mark hue={30}
                            ><span>import the next/image component into the component you&#39;d like
                                to add an image to</span>
                            </Mark>.
                        </p>
                        <Mark />
                        <p>To summarize, using Image Optimization with Next.js on Vercel:</p>
                        <ul>
                            <li>Zero-configuration Image Optimization when using next/image</li>
                            <li>Helps your team ensure great performance by default</li>
                            <li>
                                <Mark hue={220}
                                ><span>Keeps your builds fast by optimizing images on-demand</span></Mark>
                            </li>
                            <li>Requires No additional services needed to procure or set up</li>
                        </ul>
                    </section>
                </div>
            </div>

        </>
    );
};

export default App;
