import styled from 'styled-components/native';

interface TextProps {
  weight?: '400' | '600' | '700';
  color?: string;
  size?: number;
  opacity?: number;
};

export const Text = styled.Text<TextProps>`
  font-family: ${({ weight }: any) => weight ? `GeneralSans-${weight}` : 'GeneralSans-400'};
  color: ${({ color }: any) => color || '#333'};
  font-size: ${({ size }: any) => size ? `${size}px` : '16px'};
  opacity: ${({ opacity }: any) => opacity || 1};
`;
