import { Theme } from "@unocss/preset-mini"
import { Preset } from "unocss"

const presetLayout = (): Preset<Theme> => ({
    name: "layout",
    shortcuts: [
        {
            vstack: "flex flex-col justify-start alignment-leading spacing-2",
            hstack: "flex flex-row justify-start alignment-top spacing-2",
            spacer: "flex-1",
        },
        [
            /^alignment-(.*)$/,
            ([, type]) => {
                switch (type) {
                    case "leading":
                    case "top":
                        return "items-start"
                    case "trailing":
                    case "bottom":
                        return "items-end"
                    case "center":
                        return "items-center"
                    default:
                        return ""
                }
            },
        ],
        [/^spacing-(\d+)$/, ([, spacing]) => `gap-${spacing}`],
    ],
    preflights: [
        {
            getCSS: () => /* css */ `
            .hstack:has(> .spacer) {
                justify-content: space-between;
            }

            .vstack:has(> .spacer) {
                justify-content: space-between;
            }
            `,
        },
    ],
})

export default presetLayout
