import type { NavItem, SidebarNavItem } from "$lib/types/nav";

interface DocsConfig {
	mainNav: NavItem[];
	sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
	mainNav: [
		{
			title: "Documentation",
			href: "/docs"
		},
		{
			title: "Components",
			href: "/docs/components/accordion"
		},
		{
			title: "Themes",
			href: "/themes"
		},
		{
			title: "Examples",
			href: "/examples/dashboard"
		},
		{
			title: "GitHub",
			href: "https://github.com/huntabyte/shadcn-svelte",
			external: true
		}
	],
	sidebarNav: [
		{
			title: "Getting Started",
			items: [
				{
					title: "Introduction",
					href: "/docs",
					items: []
				},
				{
					title: "Installation",
					href: "/docs/installation",
					items: []
				},
				{
					title: "UI",
					href: "/docs/installation",
					items: []
				}
			]
		},
		{
			title: "Configuration",
			href: "/docs/global-config",
			items: [
				{
					title: "App Config",
					href: "/docs/global-config",
					items: []
				}
			]
		},
		{
			title: "Architecture",
			items: [
				{
					title: "Project Structure",
					href: "/docs/architecture-project-structure",
					items: []
				},
				{
					title: "User Tenancy Model",
					href: "/docs/users",
					items: []
				}
			]
		},
		{
			title: "Concepts",
			items: [
				{
					title: "Marketing Website",
					href: "/docs/marketing-website",
					items: []
				},
				{
					title: "Email",
					href: "/docs/email",
					items: [
						{
							title: "Transactional",
							href: "/docs/email",
							items: []
						}
					]
				},
				{
					title: "Billing",
					href: "/docs/billing",
					items: []
				},
				{
					title: "Jobs",
					href: "/docs/jobs",
					items: []
				}
			]
		},
		{
			title: "Email",
			href: "/docs/email",
			items: [
				{
					title: "Transactional",
					href: "/docs/email-transactional",
					items: []
				},
				{
					title: "Lifecycle",
					href: "/docs/email-lifecycle",
					items: []
				}
			]
		},
		{
			title: "Guidelines",
			href: "/docs/ui",
			items: [
				{
					title: "Logging",
					href: "/docs/app-logging",
					items: []
				},
				{
					title: "User Notifications",
					href: "/docs/app-user-notifications",
					items: []
				}
			]
		}
	]
};

type Example = {
	name: string;
	href: string;
	label?: string;
	code: string;
};
export const examples: Example[] = [
	{
		name: "Dashboard",
		href: "/examples/dashboard",
		code: "https://github.com/huntabyte/shadcn-svelte/tree/main/apps/www/src/lib/components/docs/dashboard"
	},
	{
		name: "Cards",
		href: "/examples/cards",
		code: "https://github.com/huntabyte/shadcn-svelte/tree/main/apps/www/src/routes/examples/cards"
	},
	// {
	// 	name: "Tasks",
	// 	href: "/examples/tasks",
	// 	label: "New",
	// 	code: "https://github.com/huntabyte/shadcn-svelte/tree/main/apps/www/apps/www/app/examples/tasks"
	// },
	{
		name: "Playground",
		href: "/examples/playground",
		code: "https://github.com/huntabyte/shadcn-svelte/tree/main/apps/www/src/routes/examples/playground"
	},
	{
		name: "Music",
		href: "/examples/music",
		code: "https://github.com/huntabyte/shadcn-svelte/tree/main/apps/www/src/routes/examples/music"
	},
	{
		name: "Authentication",
		href: "/examples/authentication",
		code: "https://github.com/huntabyte/shadcn-svelte/tree/main/apps/www/src/routes/examples/authentication"
	},
	{
		name: "Forms",
		href: "/examples/forms",
		code: "https://github.com/huntabyte/shadcn-svelte/tree/main/apps/www/src/routes/examples/forms"
	}
];
