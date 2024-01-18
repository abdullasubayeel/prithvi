export function formatDateTime(dateTime: Date) {
  const currentDate = new Date();
  const yesterday = new Date(currentDate);
  yesterday.setDate(currentDate.getDate() - 1);

  if (dateTime.toDateString() === currentDate.toDateString()) {
    // Format as "09:58 pm" for today
    const formattedTime = dateTime.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
    return formattedTime.toLowerCase();
  } else if (dateTime.toDateString() === yesterday.toDateString()) {
    // Return "Yesterday" for yesterday's date
    return 'Yesterday';
  } else {
    // Format as "05/12/2000" for other dates
    const formattedDate = dateTime.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    });
    return formattedDate;
  }
}
