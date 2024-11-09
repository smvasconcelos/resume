import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { ISyntaxHighlightProps } from './SyntaxHighlight.types';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipBoardButton } from './SyntaxHighlight.styles';
import { Icons } from 'shared/assets/icons';

export function SyntaxHighlight({
  codeString
}: ISyntaxHighlightProps): JSX.Element {
  return (
    <div style={{ position: 'relative' }}>
      <SyntaxHighlighter
        wrapLines={true}
        showLineNumbers={true}
        language='typescript'
        style={darcula}
      >
        {codeString}
      </SyntaxHighlighter>

      <CopyToClipBoardButton
        onClick={async () => {
          await navigator.clipboard.writeText(codeString);
        }}
      >
        <Icons.Copy />
      </CopyToClipBoardButton>
    </div>
  );
}
