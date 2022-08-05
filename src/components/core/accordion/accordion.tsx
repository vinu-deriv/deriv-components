import { useState, useEffect, ReactElement } from 'react';
import * as Stitches from '@stitches/react';
import { styled } from 'Styles/stitches.config';
import { modifyVariantsForStory } from 'Styles/type-utils';
import AccordionTitle from './accordion-title';
import AccordionContent from './accordion-content';

export type AccordionProps = {
    children?: ReactElement[] | ReactElement;
    dark: boolean;
    elevation_type: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
    type: 'bottomBorder' | 'container' | 'containerWithBorder' | 'containerWithShadow';
};

const AccordionDiv = styled('div', {
    variants: {
        elevation_type: {
            xs: {
                boxShadow: 'none',
            },
            sm: {
                boxShadow: 'none',
            },
            md: {
                boxShadow: 'none',
            },
            lg: {
                boxShadow: 'none',
            },
            xl: {
                boxShadow: 'none',
            },
            xxl: {
                boxShadow: 'none',
            },
            xxxl: {
                boxShadow: 'none',
            },
        },
        type: {
            bottomBorder: {
                borderBottom: '1px solid $greyLight300',
            },
            container: {
                borderRadius: '24px',
            },
            containerWithBorder: {
                borderRadius: '8px',
                border: '1px solid $greyLight300',
            },
            containerWithShadow: {
                boxShadow: '$xs',
            },
        },
        dark: {
            true: {
                borderColor: '$greyDark500',
            },
        },
    },
    compoundVariants: [
        {
            type: 'bottomBorder',
            dark: true,
            css: {
                borderColor: '$greyDark500',
            },
        },
        {
            type: 'containerWithBorder',
            dark: true,
            css: {
                borderColor: '$greyDark500',
            },
        },
        {
            type: 'containerWithShadow',
            elevation_type: 'xs',
            css: {
                boxShadow: '$xs',
            },
        },
        {
            type: 'containerWithShadow',
            elevation_type: 'sm',
            css: {
                boxShadow: '$sm',
            },
        },
        {
            type: 'containerWithShadow',
            elevation_type: 'md',
            css: {
                boxShadow: '$md',
            },
        },
        {
            type: 'containerWithShadow',
            elevation_type: 'lg',
            css: {
                boxShadow: '$lg',
            },
        },
        {
            type: 'containerWithShadow',
            elevation_type: 'xl',
            css: {
                boxShadow: '$xl',
            },
        },
        {
            type: 'containerWithShadow',
            elevation_type: 'xxl',
            css: {
                boxShadow: '$xxl',
            },
        },
        {
            type: 'containerWithShadow',
            elevation_type: 'xxxl',
            css: {
                boxShadow: '$xxxl',
            },
        },
    ],
});

const Accordion = ({ type, children, dark, elevation_type = 'xs' }: AccordionProps) => {
    return (
        <AccordionDiv type={type} dark={dark} elevation_type={elevation_type}>
            {children}
        </AccordionDiv>
    );
};

Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;

export default Accordion;

type AccordionVariantProps = Stitches.VariantProps<typeof Accordion>;

export const AccordionStory = modifyVariantsForStory<AccordionVariantProps, AccordionProps, typeof Accordion>(
    Accordion,
);
