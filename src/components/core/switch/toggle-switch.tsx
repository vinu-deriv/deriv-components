import * as Stitches from '@stitches/react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { styled } from 'Styles/stitches.config';
import { modifyVariantsForStory } from 'Styles/type-utils';

export type ToggleSwitchProps = {
    dark?: boolean;
    class_name_label?: string;
    id?: string;
    default_checked?: boolean;
    label: string;
    handleChange: (check: boolean) => void;
};

const StyledSwitch = styled(SwitchPrimitive.Root, {
    all: 'unset',
    width: 44,
    height: 24,
    backgroundColor: '$greyLight500',
    borderRadius: '16px',
    position: 'relative',
    '&[data-state="checked"]': { backgroundColor: '$greenLight' },
    variants: {
        dark: {
            true: {
                backgroundColor: '$greyDark300',
                '&[data-state="checked"]': { backgroundColor: '$greenDark' },
            },
        },
    },
});

const StyledThumb = styled(SwitchPrimitive.Thumb, {
    display: 'block',
    width: 18,
    height: 18,
    backgroundColor: 'white',
    borderRadius: '50%',
    transition: 'transform 250ms',
    transform: 'translateX(3px)',
    willChange: 'transform',
    '&[data-state="checked"]': { transform: 'translateX(23px)' },
});

const Flex = styled('div', { display: 'flex' });
const Label = styled('label', {
    fontSize: '$2xs',
    lineHeight: '$lineHeight20',
    userSelect: 'none',
    fontWeight: 'normal',
    paddingRight: '1rem',
    color: '$greyLight700',
    variants: {
        dark: {
            true: {
                color: '$greyDark100',
            },
        },
    },
    '@mobile': {
        lineHeight: '$lineHeight18',
        fontSize: '$3xs',
    },
});

const ToggleSwitch = ({
    dark,
    class_name_label,
    id,
    default_checked = false,
    label,
    handleChange,
    ...props
}: ToggleSwitchProps) => (
    <Flex css={{ alignItems: 'center' }}>
        {label && (
            <Label htmlFor={id} className={class_name_label} dark={dark}>
                {label}
            </Label>
        )}
        <StyledSwitch
            id={id}
            dark={dark}
            defaultChecked={default_checked}
            onCheckedChange={(check_value: boolean) => handleChange(check_value)}
            {...props}
        >
            <StyledThumb />
        </StyledSwitch>
    </Flex>
);

export default ToggleSwitch;

type ToggleSwitchVariantProps = Stitches.VariantProps<typeof ToggleSwitch>;

export const ToggleSwitchStory = modifyVariantsForStory<
    ToggleSwitchVariantProps,
    ToggleSwitchProps,
    typeof ToggleSwitch
>(ToggleSwitch);