import type { ProjectStatus } from "../../types/content";

export function StatusIndicator({
	status,
}: {
	status: ProjectStatus | string;
}) {
	return (
		<span
			className={`status status--${status.toLowerCase().replaceAll(" ", "-")}`}
		>
			<span aria-hidden="true" />
			{status}
		</span>
	);
}
