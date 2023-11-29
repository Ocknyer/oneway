const useCopyClipboard = () => {
  const copyToClipboard = async (text: string) => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(text);
        alert('계좌번호가 복사되었습니다.');
      }
    } catch (error) {
      console.error('Failed to copy to clipboard: ', error);
    }
  };

  const getTextFromClipboard = async () => {
    try {
      if (navigator.clipboard) {
        const text = await navigator.clipboard.readText();
        return text;
      }
      return '';
    } catch (error) {
      console.error('Failed to read from clipboard: ', error);
      return '';
    }
  };

  return { copyToClipboard, getTextFromClipboard };
};

export default useCopyClipboard;
