"use client";

import { WelcomeSection, AboutSection, Skills } from "app/sections";

export default function Page() {
	return (
		<div className="container-md">
			<WelcomeSection />
			<AboutSection />
			<Skills />
		</div>
	);
}
