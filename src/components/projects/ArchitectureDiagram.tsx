export function ArchitectureDiagram({ nodes }: { nodes: string[] }) {
  return <div className="architecture" role="img" aria-label={`Architecture: ${nodes.join(', then ')}`}>{nodes.map((node, index) => <div className="architecture-node" key={node}><div>{node}</div>{index < nodes.length - 1 && <span aria-hidden="true">↓</span>}</div>)}</div>
}
