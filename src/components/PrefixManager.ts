let globalPrefix = '';
let containerPrefix: string | undefined;
let rowPrefix: string | undefined;
let columnPrefix: string | undefined;

class PrefixManager {
	public set global(prefix: string) {
		globalPrefix = prefix;
	}

	public get global(): string {
		return globalPrefix;
	}

	public get container(): string {
		return containerPrefix || globalPrefix;
	}

	public set container(prefix: string) {
		containerPrefix = prefix;
	}

	public get row(): string {
		return rowPrefix || globalPrefix;
	}

	public set row(prefix: string) {
		rowPrefix = prefix;
	}

	public get column(): string {
		return columnPrefix || globalPrefix;
	}

	public set column(prefix: string) {
		columnPrefix = prefix;
	}
}

export default new PrefixManager();
