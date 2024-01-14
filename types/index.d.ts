import type {Link as ULink, Avatar} from "#ui/types";


export interface Link extends ULink {
    label: string,
    icon?: string,
    description?: string,
    disables?: boolean,
    children?: Link[]
}
