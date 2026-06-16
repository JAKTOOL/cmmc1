export const ArchivedNotice = () => (
    <aside
        role="alert"
        className="fixed bottom-0 left-0 z-50 w-full border-t border-amber-300 bg-amber-50 p-3 text-center text-sm text-amber-900 shadow-md"
    >
        <span className="font-semibold">This application is archived.</span> All
        new development will be at{" "}
        <a
            href="https://app.getcmmc.consulting"
            className="font-semibold underline hover:text-amber-700"
        >
            app.getcmmc.consulting
        </a>
        .
    </aside>
);
