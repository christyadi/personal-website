import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArchitectureDiagram } from "../components/projects/ArchitectureDiagram";
import { StatusIndicator } from "../components/workstation/StatusIndicator";
import { getProjectBySlug } from "../lib/content/repository";

const labels: Record<string, string> = {
	context: "Context",
	problem: "Problem",
	solution: "Solution",
	implementation: "Implementation",
	challenges: "Challenges",
	outcome: "Outcome",
	nextIteration: "Next iteration",
};
export function ProjectPage() {
	const project = getProjectBySlug(useParams().projectSlug);
	if (!project) return <Navigate to="/not-found" replace />;

	const entries = Object.entries(project.sections ?? {}).filter(
		(entry): entry is [keyof typeof labels, string] => Boolean(entry[1]),
	);

	return (
		<article className="project-page">
			<Link className="back-link" to="/work">
				<ArrowLeft size={15} /> Back to work index
			</Link>
			<header className="project-hero">
				<div>
					<p className="eyebrow">SERVICE / {project.shortName.toUpperCase()}</p>
					<h1>{project.name}</h1>
					<p className="project-lede">{project.description}</p>
				</div>
				<dl className="project-metadata">
					<div>
						<dt>YEAR</dt>
						<dd>{project.year}</dd>
					</div>
					<div>
						<dt>ROLE</dt>
						<dd>{project.role}</dd>
					</div>
					<div>
						<dt>STATUS</dt>
						<dd>
							<StatusIndicator status={project.status} />
						</dd>
					</div>
					<div>
						<dt>STACK</dt>
						<dd>{project.technologies.join(", ")}</dd>
					</div>
					{project.url && (
						<div>
							<dt>URL</dt>
							<dd>
								<a
									className="project-url"
									href={project.url}
									target="_blank"
									rel="noreferrer"
								>
									Visit project <ArrowUpRight size={14} aria-hidden="true" />
								</a>
							</dd>
						</div>
					)}
				</dl>
			</header>
			<div className="project-content">
				{entries.map(([key, text], index) => (
					<section className="case-section" key={key}>
						<div className="case-number">
							{String(index + 1).padStart(2, "0")} / {labels[key].toUpperCase()}
						</div>
						<p>{text}</p>
					</section>
				))}
			</div>
			{project.architecture && (
				<section className="architecture-section">
					<p className="case-number">ARCHITECTURE</p>
					<ArchitectureDiagram nodes={project.architecture} />
				</section>
			)}
			{project.decisions && project.decisions.length > 0 && (
				<section className="decision-section">
					<p className="case-number">ENGINEERING DECISIONS</p>
					<div>
						{project.decisions.map((decision) => (
							<article className="decision" key={decision.id}>
								<p className="mono">DECISION / {decision.id}</p>
								<h2>{decision.title}</h2>
								<dl>
									<div>
										<dt>Decision</dt>
										<dd>{decision.decision}</dd>
									</div>
									<div>
										<dt>Reasoning</dt>
										<dd>{decision.reasoning}</dd>
									</div>
									<div>
										<dt>Alternative</dt>
										<dd>{decision.alternative}</dd>
									</div>
								</dl>
							</article>
						))}
					</div>
				</section>
			)}
			<Link className="next-link" to="/work">
				Inspect another project <ArrowUpRight size={16} />
			</Link>
		</article>
	);
}
