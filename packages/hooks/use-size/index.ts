import { buildProp } from '@sakura-ui/utils'
import { componentSizes } from '@sakura-ui/constants'


export const useSizeProp = buildProp({
    type: String,
    values: componentSizes,
    required: false
})
