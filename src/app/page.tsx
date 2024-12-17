import FlickeringGrid from "@/components/ui/flickering-grid";

export default function Landing() {
	return (
		<>
			<div className="relative flex h-screen w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
				<p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
					Next.js 15
				</p>
				<FlickeringGrid
					className="z-0 absolute inset-0 size-full"
					squareSize={4}
					gridGap={6}
					color="#6B7280"
					maxOpacity={0.1}
					flickerChance={0.1}
				/>
			</div>
		</>
	);
}
