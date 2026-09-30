import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import { AboutPage } from "./pages/AboutPage";
import { ChangelogPage } from "./pages/ChangelogPage";
import { HomePage } from "./pages/HomePage";
import { LabPage } from "./pages/LabPage";
import { NotesPage } from "./pages/NotesPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProjectPage } from "./pages/ProjectPage";
import { WorkPage } from "./pages/WorkPage";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
	return (
		<Routes>
			<Route element={<AppLayout />}>
				<Route index element={<HomePage />} />
				<Route path="work" element={<WorkPage />} />
				<Route path="work/:projectSlug" element={<ProjectPage />} />
				<Route path="lab" element={<LabPage />} />
				<Route path="notes" element={<NotesPage />} />
				<Route path="about" element={<AboutPage />} />
				<Route path="changelog" element={<ChangelogPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Route>
			<Analytics />
		</Routes>
	);
}
