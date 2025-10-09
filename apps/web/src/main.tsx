import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import typescriptLogo from "/typescript.svg";
import { Header, Counter, PdfViewer, PdfViewerConfig } from "@repo/ui";

const App = () => (
	<div>
		<a
			href="https://vitejs.dev"
			target="_blank">
			<img
				src="/vite.svg"
				className="logo"
				alt="Vite logo"
			/>
		</a>
		<a
			href="https://www.typescriptlang.org/"
			target="_blank">
			<img
				src={typescriptLogo}
				className="logo vanilla"
				alt="TypeScript logo"
			/>
		</a>
		{/* <Header title="Web" />
		<div className="card">
			<Counter />
		</div> */}
		<PdfViewerConfig>
			<div
				style={{
					maxWidth: "1024px",
					margin: "0 auto",
				}}>
				<h1>RP Starter Toolkit: Vite + React + Typescript in Turborepo</h1>
				<br />
				<h2>Default Toolbar</h2>
				<PdfViewer
					providerProps={{
						src: `https://cdn.codewithmosh.com/image/upload/v1721763853/guides/web-roadmap.pdf`,
						initialPage: 1,
					}}
					defaultLayoutProps={{ style: { width: "100%", height: "600px" } }}
				/>
				<br />
				{/* <h2>Without Toolbar</h2>
				<PdfViewer
					showToolbar={false}
					providerProps={{
						src: `https://cdn.codewithmosh.com/image/upload/v1721763853/guides/web-roadmap.pdf`,
						initialPage: 1,
					}}
				/>
				<br />
				<h2>Mobile</h2>
				<PdfViewer
					defaultLayoutProps={{
						style: { width: "500px", margin: "0 auto" },
					}}
				/> */}
			</div>
		</PdfViewerConfig>
	</div>
);

createRoot(document.getElementById("app")!).render(<App />);
