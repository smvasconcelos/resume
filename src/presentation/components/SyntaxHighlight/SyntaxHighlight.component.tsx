import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Icons } from 'shared/assets/icons';
import { CopyToClipBoardButton } from './SyntaxHighlight.styles';
import { ISyntaxHighlightProps } from './SyntaxHighlight.types';

export function SyntaxHighlight({
  codeString
}: ISyntaxHighlightProps): React.JSX.Element {
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
