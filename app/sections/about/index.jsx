"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p className="my-3.5">
							Hello there! I'm Musthafa M, a passionate and results-driven software engineer with a
							keen eye for innovation and problem-solving. With a solid background in computer
							science and a knack for turning complex ideas into efficient, user-friendly solutions,
							I thrive on the challenges that come with crafting cutting-edge software.
						</p>
						<p className="my-3.5">
							My journey in the world of coding began with a fascination for technology, and over
							the years, I've honed my skills in Wordpress, laravel , reactjs, Nextjs, Flutter
							..etc. Whether it's developing scalable applications, optimizing algorithms, or
							troubleshooting intricate bugs, I approach each task with enthusiasm and dedication.
						</p>
						<p>
							In addition to my technical expertise, I pride myself on my ability to collaborate
							effectively with cross-functional teams. I believe that communication is key to any
							successful project, and I enjoy fostering a collaborative environment where ideas can
							flourish.
						</p>
						<p className="my-3.5">
							Continuously staying abreast of the latest industry trends, I am committed to lifelong
							learning and professional growth. My goal is not just to write code, but to create
							elegant solutions that have a positive impact on end-users. Outside of the digital
							realm, you might find me exploring new technologies, attending tech meetups, or
							contributing to open-source projects.
						</p>
						<p className="my-3.5">
							If you're seeking a software engineer who is not only technically proficient but also
							brings creativity and a collaborative spirit to the table, then I'd love to connect
							and discuss how I can contribute to your next exciting project. Let's build something
							great together!
						</p>
					</div>
				</div>
			</section>
		</LazyMotion>
	);
}
