// import { postReIssueAccessToken } from '@/api/auth';
// import { useMutation, useQueryClient } from '@tanstack/react-query';

// export default function ReIssueToken() {
//   const queryClient = useQueryClient();

//   const { mutateAsync: refreshToken } = useMutation(postReIssueAccessToken, {
//     onSuccess: (newAccessToken) => {
//       localStorage.setItem('access', newAccessToken);
//       queryClient.setQueryData('accessToken', newAccessToken);
//     },
//   });
// }
